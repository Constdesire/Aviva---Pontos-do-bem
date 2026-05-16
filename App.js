import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, ActivityIndicator, ScrollView } from 'react-native';
import { supabase } from './supabase';
import Home from './Home'; 

export default function App() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Cadastro
  const [userType, setUserType] = useState('voluntario'); // 'voluntario', 'empresa', 'ong'
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); 
  const [documento, setDocumento] = useState(''); // Armazena o CNPJ se for ONG/Empresa
  
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const mostrarAlerta = (titulo, mensagem) => {
    if (Platform.OS === 'web') alert(`${titulo}: ${mensagem}`);
    else {
      const { Alert } = require('react-native');
      Alert.alert(titulo, mensagem);
    }
  };

  // FUNÇÃO DE LOGIN
  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) mostrarAlerta('Erro', error.message);
    setLoading(false);
  }

  // FUNÇÃO DE CADASTRO
  async function handleSignUp() {
    if (!fullName || !email || !password) return mostrarAlerta('Erro', 'Por favor, preencha os campos obrigatórios.');
    if (userType !== 'voluntario' && !documento) return mostrarAlerta('Erro', 'Por favor, informe o CNPJ.');
    
    setLoading(true);
    
    // O Supabase permite enviar dados extras no 'options.data'
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          user_type: userType,
          documento: documento // Salva o CNPJ nos metadados para uso futuro
        }
      }
    });

    if (error) mostrarAlerta('Erro', error.message);
    else {
      mostrarAlerta('Sucesso!', `Conta de ${userType.toUpperCase()} criada com sucesso!`);
      // Limpa os campos após o cadastro
      setFullName('');
      setDocumento('');
      setPassword('');
      setIsLogin(true); // Volta para o login
    }
    setLoading(false);
  }

  // TELA APÓS LOGIN (HOME MOCK)
 if (session) {
    return (
      <Home 
        session={session} 
        onLogout={() => supabase.auth.signOut()} 
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* LOGO SECTION */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
            <Text style={{fontSize: 30}}>🌱</Text> 
        </View>
        <Text style={styles.logoText}>AVIVA</Text>
        <Text style={styles.logoSubtitle}>PONTOS DO BEM</Text>
      </View>

      <Text style={styles.greeting}>Olá!</Text>
      <Text style={styles.subGreeting}>
        {isLogin ? 'Bem Vindo ao Aviva ...' : 'Crie sua conta para começar ...'}
      </Text>

      {/* CAMPOS DE ENTRADA */}
      <View style={styles.inputArea}>
        
        {/* SELETOR DE PERFIL (Aparece apenas no Cadastro) */}
        {!isLogin && (
          <View style={styles.typeSelector}>
            <TouchableOpacity 
              style={[styles.typeBtn, userType === 'voluntario' && styles.typeBtnActive]} 
              onPress={() => setUserType('voluntario')}
            >
              <Text style={userType === 'voluntario' ? styles.typeTextActive : styles.typeText}>Voluntário</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.typeBtn, userType === 'ong' && styles.typeBtnActive]} 
              onPress={() => setUserType('ong')}
            >
              <Text style={userType === 'ong' ? styles.typeTextActive : styles.typeText}>ONG</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.typeBtn, userType === 'empresa' && styles.typeBtnActive]} 
              onPress={() => setUserType('empresa')}
            >
              <Text style={userType === 'empresa' ? styles.typeTextActive : styles.typeText}>Empresa</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* NOME COMPLETO OU RAZÃO SOCIAL */}
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder={userType === 'voluntario' ? "Nome Completo" : "Nome da Instituição / Empresa"}
            value={fullName}
            onChangeText={setFullName}
          />
        )}

        {/* CNPJ (Aparece apenas para ONG e Empresa) */}
        {!isLogin && userType !== 'voluntario' && (
          <TextInput
            style={styles.input}
            placeholder="CNPJ"
            value={documento}
            onChangeText={setDocumento}
            keyboardType="numeric"
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* BOTÕES PRINCIPAIS */}
      <View style={styles.buttonRow}>
        {loading ? (
          <ActivityIndicator color="#0B3B60" size="large" />
        ) : (
          <>
            <TouchableOpacity 
              style={[styles.actionButton, isLogin ? styles.btnActive : styles.btnOutline]} 
              onPress={isLogin ? handleLogin : () => setIsLogin(true)}
            >
              <Text style={isLogin ? styles.buttonText : styles.buttonTextOutline}>Conectar-se</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.actionButton, !isLogin ? styles.btnActive : styles.btnOutline]} 
              onPress={!isLogin ? handleSignUp : () => setIsLogin(false)}
            >
              <Text style={!isLogin ? styles.buttonText : styles.buttonTextOutline}>Cadastrar-se</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* REDES SOCIAIS */}
      <Text style={styles.footerText}>Ou use suas redes sociais:</Text>
      <View style={styles.socialRow}>
        <View style={[styles.socialIcon, {backgroundColor: '#3b5998'}]}><Text style={styles.siText}>f</Text></View>
        <View style={[styles.socialIcon, {backgroundColor: '#db4a39'}]}><Text style={styles.siText}>G</Text></View>
        <View style={[styles.socialIcon, {backgroundColor: '#0077b5'}]}><Text style={styles.siText}>in</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    ...Platform.select({ web: { maxWidth: 450, alignSelf: 'center', width: '100%' } })
  },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E0F2F1', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  logoText: { fontSize: 32, fontWeight: 'bold', color: '#0B3B60', letterSpacing: 2 },
  logoSubtitle: { fontSize: 12, color: '#55C2C3', fontWeight: 'bold', letterSpacing: 4 },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#333' },
  subGreeting: { fontSize: 14, color: '#888', marginBottom: 30 },
  inputArea: { width: '100%', marginBottom: 20 },
  
  /* ESTILOS DO SELETOR DE PERFIL */
  typeSelector: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, width: '100%', backgroundColor: '#F0F0F0', borderRadius: 15, padding: 5 },
  typeBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 12 },
  typeBtnActive: { backgroundColor: '#55C2C3' },
  typeText: { color: '#666', fontSize: 13, fontWeight: '600' },
  typeTextActive: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },

  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 15, marginBottom: 15, borderWidth: 1, borderColor: '#EEE' },
  buttonRow: { flexDirection: 'row', gap: 10, marginBottom: 40 },
  actionButton: { flex: 1, padding: 15, borderRadius: 25, alignItems: 'center' },
  btnActive: { backgroundColor: '#0B3B60' },
  btnOutline: { backgroundColor: '#FFF', borderWidth: 2, borderColor: '#55C2C3' },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
  buttonTextOutline: { color: '#333', fontWeight: 'bold' },
  footerText: { fontSize: 12, color: '#999', marginBottom: 15 },
  socialRow: { flexDirection: 'row', gap: 20 },
  socialIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  siText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 }
});