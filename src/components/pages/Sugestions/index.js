import React from 'react';
import { 
    Container,
    Title,
    CardTitle,
    Description,
    Card,
    Img,
    ScrollCard
 } from './styles';
import img1 from '../../../assets/pearljam.png';



 const images = [
     {
         key: String(Math.random()),
         img: img1,
         cardtitle: 'testestesssss',
         desc: 'heueueuheueuehuehheueheuheuheuhehueuehe'
     }
 ]

export default function Sugestions(){
    return(
        <Container>
            <Title>Feito para você</Title>
            <Card>
                <Img source={require('../../../assets/pearljam.png')} />
                <CardTitle>Pearl Jam</CardTitle>
                <Description>Acústico de 1996 feito pela MTV</Description>
            </Card>

            <Card>
                <Img source={require('../../../assets/pearljam.png')} />
                <CardTitle>Pearl Jam</CardTitle>
                <Description>Acústico de 1996 feito pela MTV</Description>
            </Card>

            <Card>
                <Img source={require('../../../assets/pearljam.png')} />
                <CardTitle>Pearl Jam</CardTitle>
                <Description>Acústico de 1996 feito pela MTV</Description>
            </Card>
        </Container>
    )
}