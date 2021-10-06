import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    height: 100px;
    margin-top: 150px;
    width: 290px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 5, paddingRight: 20 },
    showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    //background: #07da63;
    border: solid;
    border-width: 3px;
    border-color: #07da63;
    box-shadow: 4px 4px 9px #D3D3D3;
    border-radius: 5px;
    margin-left: 10px;
    padding: 1px;
    justify-content: space-between;
`;

export const TabText = styled.View`
    font-size: 13px;
    color: #07da63;
    padding-left: 4px;
    padding-bottom: 4px;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;

`;

export const Card = styled.View`
    margin-top: 40px;
    box-shadow: 4px 4px 9px #D3D3D3;
    //flex: 3;
    height: 300px;
    background: #fff;
    //border: solid;
    //border-width: 3px;
    //border-color: #07da63;
    border-radius: 10px;
    margin: 0 20px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const CardContent = styled.View`
    flex:1;
    justify-content: center;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #161616;
    font-weight: bold;
`;


export const Description = styled.Text`
    font-size: 30px;
    margin-top: 3px;
`;

export const CardFooter = styled.View`
    padding: 30px;
    background:#eee;
    border-radius: 7px;
`;