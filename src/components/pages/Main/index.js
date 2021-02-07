import React from 'react';
import {
    Container,
    Top,
    TitleTop
} from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import Sugestions from '../Sugestions/index';


export default function Main(){
    return(
        <Container>
            <Top>
                <TitleTop>Olá, Felipe</TitleTop>
                <Ionicons name="settings" size={24} color="#FFFFFF" />
            </Top>
            <Sugestions />
        </Container>
    )
};

