import React from 'react'
import Footer from './HeroSection/Footer';
import Main from './HeroSection/Main';
import StoreList from './StoreList';

export const PRODUTOS = [
    {
        id: 1,
        name: 'Macbook',
        descount: '-15%',
        price: 'R$: 3.400,00',
        description: 'The lattes apple Macbook',
        image: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/09/apple-se-prepara-para-lancar-novos-modelos-do-macbook-pro-de-14-e-16.jpg',
    },
    {
        id: 2,
        name: 'Macbook Pro',
        price: 'R$: 4.200,00',
        descount: '-10%',
        description: 'Apple Macbook for those who seek more',
        image: 'https://www.log.com.tr/wp-content/uploads/2022/03/sira-digerlerinde-2022-macbook-air-icin-yeni-tahminler-geldi-660x371.jpg',
    },
    {
        id: '3',
        name:'Notebook Gamer Alien Ware' ,
        price: 'R$: 5.199,99',
        descount: '-20%',
        description: 'The best Notebook to play Games',
        image: 'https://mmorpgbr.com.br/wp-content/uploads/2020/05/6817_dsc07870-scaled.jpeg',
    },
    {
        id: '3',
        name:'Notebook Razer Blade Pro' ,
        price: 'R$: 7.599,99',
        descount: '-15%',
        description: 'The best Notebook avaible',
        image: 'https://t2.tudocdn.net/233004?w=1920',
    }
]

const MAINPRODUCT = [
    {
        id: 'm1',
        name: 'Gabinete Razer',
        price: 'R$: 17.000,00',
        descount: '-15%',
        image: 'https://cdn.dooca.store/1332/products/ke1qed8zbkmdghwbdn2pmkw11amm2u4uew4q.jpg?v=1638307084',
        description: 'Computador Gamer Alpha Razer'

    },
    {
        id: 'm2',
        name:'Kabum Super Máquina',
        price: 'R$: 20.000,00',
        descount: '-18%',
        image: 'https://tecmasters.com.br/wp-content/uploads/2021/01/DSC05528-scaled-1.jpg',
        description: 'A legend, a tale, now, a possibility'
    },
    {
        id: 'm3',
        name:'Processador intel core i7',
        price: 'R$: 2.000,00',
        descount: '-12%',
        image: 'https://s.zst.com.br/cms-assets/2021/08/o-que-processador-i7-2-.jpg',
        description: 'Go beyond the unknown'
    },
    {
        id: 'm4',
        name:'Monitor Curvo',
        price: 'R$: 12.000,00',
        image: 'https://s2.glbimg.com/8BjC52mRHoDPq3gg7BvCdbhWE8I=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/m/m/gGjbV5S9GK1SgquSvBrw/samsung-odyssey-g7-02.jpg',
        description: 'See Everything, no boundries'
    },
    {
        id: 'm5',
        name:'Teclado Hyper X',
        descount: '-20%',
        price: 'R$: 200,00',
        image: 'https://s2.glbimg.com/6foJGXVcO9zLMRQmtFa9iZJcwiw=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/B/IgJOvLS0iz3Z1lRAGQnQ/90-6.jpg',
        description: 'The entire world as far as one touch'
    },
]
const SECONDMAINPRODUCT = [
    {
        id:'sm1',
        name: 'Teclado mecânico Razer',
        price: 'R$: 300,00',
        description: 'The entire world as far as one touch',
        descount: '-10%',
        image: 'https://s2.glbimg.com/HLzW74rHG37pmwvDprn3lHPt-CE=/0x0:2400x1443/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/z/u/FJPtUkTruet1U4ipGomQ/mateo-ncu4yq5xdeq-unsplash.jpg'
    },
    {
        id:'sm2',
        name: 'Headphone Razer',
        price: 'R$: 500,00',
        description: 'You cant fight without hearing the War drums',
        descount: '-10%',
        image: 'https://assets2.razerzone.com/images/pnx.assets/f6cf09772f55a093aed056ce6cac069d/razer-nari-category-500x500.jpg'
    },
    {
        id:'sm3',
        name: 'Setup Completo Promoção',
        price: 'R$: 20.500,00',
        description: 'Yor Dream is Calling for you',
        descount: '-10%',
        image: 'https://www.gamerinfo.com.br/wp-content/uploads/2021/01/setup-gamer-completo.jpg'
    },
    {
        id:'sm4',
        name: 'Play Station 5 ',
        price: 'R$: 4.500,00',
        description: 'Jut Play it',
        descount: '-10%',
        image: 'https://www.internetmatters.org/wp-content/uploads/2021/03/Playstation-5-console-image.png'
    },
    {
        id:'sm5',
        name: 'Logitech g502 hero',
        price: 'R$: 300,00',
        description: 'Shoot first, sorry the KS latter',
        descount: '-10%',
        image: 'https://geek360.com.br/wp-content/uploads/2020/04/melhores-mouses-da-logitech.jpg'
    }

]

const Produtos = () =>{
    return(
        <>
    <main  className='bg-zinc-900  tablet:h-[600px]  '>
        <StoreList items={PRODUTOS}/>
    </main>
        <section className='bg-zinc-900 relative'>
        <Main items={MAINPRODUCT}/>
        <Main items={SECONDMAINPRODUCT}/>
        </section>
        <Footer/>
        </>

    )

}
export default Produtos;