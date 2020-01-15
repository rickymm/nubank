import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp'
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp'
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="group-add" size={24} color="#fff"/>
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="smartphone" size={24} color="#fff"/>
          <TabText>Recarga de Celular</TabText>
        </TabItem>

        <TabItem>
          <Icon name="help-outline" size={24} color="#fff"/>
          <TabText>Me Ajuda</TabText>
        </TabItem>

        <TabItem>
          <Icon name="receipt" size={24} color="#fff"/>
          <TabText>Pagar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff"/>
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff"/>
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff"/>
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name="credit-card" size={24} color="#fff"/>
          <TabText>Cartão Virtual</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock-open" size={24} color="#fff"/>
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
