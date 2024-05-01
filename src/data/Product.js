import zelda from '../images/zeldamain.jpg'
import spyro from '../images/spyro.jpg'
import marioodyssey from '../images/marioodyssey.jpg'
import minecraft from '../images/minecraft.jpg'
import luigi from '../images/lugimansion.jpg'
import letsgopikachu from '../images/letsgopikachu.jpg'
import pokeback from '../images/pokeback.jpg'
import minecraftprofile from '../images/minecraftprofile.jpg'
import superpro from '../images/superpro.jpg'
import spyroback from '../images/spyroback.png'
import zeldaback from '../images/zeldaback.jpg'





export const PRODUCTS = [

    {
        id: 1,
        name: 'Lengend of Zelda',
        type: 'Adventure, Action',
        rating: 5,
        pic: zelda, back: zeldaback,
        price: 1999,
        content: 'The Legend of Zelda is an action-adventure game franchise created by the Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Flagship, Vanpool, and Grezzo'
    },
    {
        id: 2,
        name: 'Spyro:Reignited',
        type: 'Platform',
        rating: 4,
        pic: spyro,
        back: spyroback,
        price: 2499,
        content: 'Spyro Reignited Trilogy is a platform video game developed by Toys for Bob and published by Activision. It is a collection of remasters of the first three games in the Spyro series: Spyro the Dragon, Riptos Rage!, and Year of the Dragon.'

    },
    {
        id: 3,
        name: 'Mario Odyssey'
        , type: 'Platform',
        rating: 4,
        pic: superpro, back: marioodyssey,
        price: 1999,
        content: 'Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!'
    },
    {
        id: 4,
        name: 'Minecraft', type: 'Adventure',
        rating: 5,
        pic: minecraftprofile, back: minecraft,
        price: 3499,
        content: 'Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.'
    },
    {
        id: 5,
        name: 'Luigis Mansion',
        type: 'Adventure, Platform',
        rating: 3,
        pic: luigi, back: luigi,
        price: 2399,
        content: 'The game sees players taking on the role of Luigi who must explore a haunted hotel, incorporating different themes on each floor, and save his friends from the ghosts that inhabit it, after the group is tricked into visiting it for a vacation by King Boo.'
    },
    {
        id: 6,
        name: "Let's go Pikachu", type: 'Adventure', rating: 5,
        pic: letsgopikachu, back: pokeback,
        price: 4999,
        content: 'Pokémon: Lets Go, Pikachu! and Pokémon: Lets Go, Eevee! are 2018 remakes of the 1998 Game Boy role-playing video game Pokémon Yellow. They were developed by Game Freak and jointly published by The Pokémon Company and Nintendo for the Nintendo Switch'
    }




]