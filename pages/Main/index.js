import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import { 
  Container, 
  Content,
  Card, 
  CardHeader, 
  NuView,
  NuText,
  CardContent, 
  Title, 
  Description, 
  CardFooter, 
  Annotation 
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) opened = true;
      else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, { 
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler 
          onGestureEvent={animatedEvent} 
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{ 
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-40, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <NuView>
                <Icon name="attach-money" size={28} color="#666"/>
                <NuText>NuConta</NuText>
              </NuView>
              <Icon name="visibility-off" size={28} color="#666"/>
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 240.198.510,23</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                <Icon name="visibility-off" size={28} color="#666"/>
                Transferência de R$ 108,15 recebida de Ana Carolina Marchi Reis
                hoje às 18:35h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      
      <Tabs translateY={translateY}/>
    </Container>
  );
}