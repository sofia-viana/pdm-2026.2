import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="sobre">
        <NativeTabs.Trigger.Label>Sobre</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="info.circle.fill" md="info" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="configuracoes">
        <NativeTabs.Trigger.Label>Configurações</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="gearshape.fill" md="settings" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
