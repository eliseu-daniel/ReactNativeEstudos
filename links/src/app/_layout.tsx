//arquivo de rotas padrao do rn

import {Stack} from 'expo-router';
import {colors} from '@/styles/colors';

export default function Layout(){
    
    const backgroundColor = colors.gray[950];
    
    return <Stack screenOptions={
        {
            headerShown:false, // para n mostrar no cabeçalho o caminho da rota
            contentStyle: {backgroundColor} // mesmo nome da propriedade e constante -> backgroundColor: backgroundColor
        }
    }/>
}