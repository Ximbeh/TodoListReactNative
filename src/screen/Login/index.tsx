import { styles } from './style';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
// import { Participant } from '../../components/Participant';
import { SetStateAction, useState } from 'react';

export default function Login() {
    
    return (
      <View style={styles.container}>
        <View style={styles.container2}>

        
            <View style={styles.header}>
                <Image style={styles.logo} source={(require('../../../assets/Logo.png'))} />
            
            
                <Text style={styles.titulo}>marketspace</Text>
                <Text style={styles.desc}>Seu espaço de compra e venda</Text>
            
            </View>

            <View style={styles.main}>
                <Text style={styles.acesse}>Acesse sua conta</Text>
                <View style={styles.input}>
                    <TextInput 
                        style={styles.email}
                        placeholder="E-mail"
                        placeholderTextColor="#ABA9AE"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        style={styles.email}
                        placeholder="Senha"
                        placeholderTextColor="#ABA9AE"
                    />
                    <Image style={styles.eye} source={(require('../../../assets/Eye.svg'))} />
            
                </View>

                <TouchableOpacity style={styles.entrar}>
                <Text style={styles.entrarTexto}>Criar uma conta</Text>
                </TouchableOpacity>

                
            </View>
        </View>

        <View style={styles.container3}>
            <Text style={styles.acesse}>Ainda não tem acesso?</Text>
            <TouchableOpacity style={styles.criar}>
                <Text>Criar uma conta</Text>
            </TouchableOpacity>
        </View>



       </View>

       
    )
  }