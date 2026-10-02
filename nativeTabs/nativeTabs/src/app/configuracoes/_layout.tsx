import { Stack } from 'expo-router';

export default function ConfiguracoesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Configurações' }} />

      {/* Slide da direita */}
      <Stack.Screen
        name="editar-perfil"
        options={{ title: 'Editar Perfil', animation: 'slide_from_right' }}
      />

      {/* Fade */}
      <Stack.Screen
        name="notificacoes"
        options={{ title: 'Notificações', animation: 'fade' }}
      />

      {/* Slide de baixo */}
      <Stack.Screen
        name="aparencia"
        options={{
          title: 'Aparência',
          animation: 'slide_from_bottom',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}