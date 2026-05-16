import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';

// --- VISÃO DO VOLUNTÁRIO (Inspirado no seu Frame 2) ---
const VoluntarioHome = ({ user }) => (
  <ScrollView style={styles.feed}>
    <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá, {user.full_name}!</Text>
        <Text style={styles.pointsText}>Você tem: 120 pontos 🌟</Text>
    </View>
    
    <View style={styles.searchBar}>
        <Text style={styles.searchText}>O que você procura?</Text>
    </View>

    <Text style={styles.sectionTitle}>Recomendados para você</Text>
    
    {/* CARD DE EXEMPLO (Reflorestamento Jundiaí) */}
    <View style={styles.card}>
        <View style={styles.cardImagePlaceholder} />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Reflorestamento Jundiaí</Text>
            <Text style={styles.cardSubtitle}>ONG SustentaCorp</Text>
            <View style={styles.matchBadge}>
                <Text style={styles.matchText}>98% Match</Text>
            </View>
            <TouchableOpacity style={styles.btnSaberMais}>
                <Text style={styles.btnSaberMaisText}>Saber mais</Text>
            </TouchableOpacity>
        </View>
    </View>
  </ScrollView>
);

// --- VISÃO DA ONG ---
const OngHome = ({ user }) => (
  <View style={styles.centered}>
    <Text style={styles.title}>Painel da ONG</Text>
    <Text style={styles.subtitle}>{user.full_name}</Text>
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.buttonText}>+ Criar Nova Ação</Text>
    </TouchableOpacity>
    <View style={styles.statsRow}>
        <View style={styles.statBox}><Text style={styles.statNum}>15</Text><Text>Voluntários</Text></View>
        <View style={styles.statBox}><Text style={styles.statNum}>3</Text><Text>Ações Ativas</Text></View>
    </View>
  </View>
);

// --- VISÃO DA EMPRESA ---
const EmpresaHome = ({ user }) => (
  <View style={styles.centered}>
    <Text style={styles.title}>Painel Corporativo</Text>
    <Text style={styles.subtitle}>{user.full_name}</Text>
    <Text style={styles.infoText}>Impacto Social Gerado:</Text>
    <View style={styles.impactCard}>
        <Text style={styles.impactValue}>R$ 15.000,00</Text>
        <Text style={styles.impactSub}>Investidos em projetos</Text>
    </View>
    <TouchableOpacity style={[styles.actionButton, {backgroundColor: '#0B3B60'}]}>
      <Text style={styles.buttonText}>Buscar Projetos para Apoiar</Text>
    </TouchableOpacity>
  </View>
);

// --- COMPONENTE PRINCIPAL HOME ---
export default function Home({ session, onLogout }) {
  const userMetadata = session.user.user_metadata;
  const userType = userMetadata?.user_type || 'voluntario';

  return (
    <View style={styles.mainContainer}>
      {/* Barra Superior Comum */}
      <View style={styles.topNav}>
        <Text style={styles.logoMini}>AVIVA</Text>
        <TouchableOpacity onPress={onLogout}>
            <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo Dinâmico baseado no Perfil */}
      <View style={styles.content}>
        {userType === 'voluntario' && <VoluntarioHome user={userMetadata} />}
        {userType === 'ong' && <OngHome user={userMetadata} />}
        {userType === 'empresa' && <EmpresaHome user={userMetadata} />}
      </View>

      {/* Menu Inferior (Tab Bar) */}
      <View style={styles.tabBar}>
        <Text style={styles.tabItem}>🏠</Text>
        <Text style={styles.tabItem}>🔍</Text>
        <Text style={styles.tabItem}>📍</Text>
        <Text style={styles.tabItem}>❤️</Text>
        <Text style={styles.tabItem}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#FFF' },
  topNav: { 
    height: 60, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    marginTop: Platform.OS === 'ios' ? 40 : 0
  },
  logoMini: { color: '#0B3B60', fontWeight: 'bold', fontSize: 18 },
  logoutText: { color: '#d9534f' },
  content: { flex: 1 },
  
  // Estilos Voluntário
  feed: { padding: 20 },
  welcomeText: { fontSize: 22, fontWeight: 'bold' },
  pointsText: { color: '#55C2C3', fontWeight: '600', marginBottom: 20 },
  searchBar: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 15, marginBottom: 20 },
  searchText: { color: '#999' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#FFF', borderRadius: 20, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#EEE' },
  cardImagePlaceholder: { height: 150, backgroundColor: '#DDD' },
  cardContent: { padding: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSubtitle: { color: '#666', marginBottom: 10 },
  matchBadge: { backgroundColor: '#E0F2F1', padding: 5, borderRadius: 5, width: 80, alignItems: 'center' },
  matchText: { color: '#00BFA5', fontSize: 10, fontWeight: 'bold' },
  btnSaberMais: { backgroundColor: '#0B3B60', padding: 10, borderRadius: 15, marginTop: 10, alignItems: 'center' },
  btnSaberMaisText: { color: '#FFF', fontWeight: 'bold' },

  // Estilos Comuns de Dashboard (ONG/Empresa)
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0B3B60' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 30 },
  actionButton: { backgroundColor: '#55C2C3', padding: 15, borderRadius: 20, width: '100%', alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', gap: 20 },
  statBox: { padding: 20, backgroundColor: '#F9F9F9', borderRadius: 15, alignItems: 'center', flex: 1 },
  statNum: { fontSize: 20, fontWeight: 'bold', color: '#0B3B60' },
  impactCard: { backgroundColor: '#E0F2F1', padding: 30, borderRadius: 20, width: '100%', alignItems: 'center', marginBottom: 20 },
  impactValue: { fontSize: 28, fontWeight: 'bold', color: '#00897B' },

  // Barra de Menu
  tabBar: { height: 70, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#EEE' },
  tabItem: { fontSize: 24 }
});