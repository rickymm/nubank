import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 90px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-left: 10px;
  padding: 10px;
  /* align-items: center; */
  justify-content: space-between;
`;

export const TabText = styled.Text`
  /* text-align: center; */
  font-size: 13px;
  color: #fff;
`;