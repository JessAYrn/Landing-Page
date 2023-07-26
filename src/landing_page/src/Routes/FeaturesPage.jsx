import React, { createContext } from 'react'
import { HeroSection } from '../Components/HeroSection'
import { DEFAULT_APP_CONTEXTS } from '../functionsAndConstants/Constants'



export const AppContext = createContext(DEFAULT_APP_CONTEXTS);

const Features = () => {
  
  return (
    <AppContext.Provider>
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133813089628852395/metaowl_precise_Internet_computer_black_header_border_with_plaq_496d4dc2-beca-4742-aacd-eb85e63c1e12.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        <HeroSection
        img='https://cdn.discordapp.com/attachments/1077489091840585800/1133824857780539493/metaowl_Black_PCB_5eb4f68a-e0f5-412d-bad7-50c5085bf6f4.png'
        text='Features'
        />
        {/* <p`
        style={{color:'white',marginTop:'20px'}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui maxime voluptatem, laudantium cumque, doloremque, dolor ipsam asperiores ratione est ipsa. Ducimus nam velit enim in officiis soluta id unde quasi cumque laudantium, magni vel excepturi obcaecati ipsa rerum architecto asperiores ad numquam. Repudiandae esse quaerat mollitia voluptate sint, pariatur vitae velit commodi ab blanditiis? In deserunt soluta quisquam aut eius, natus voluptatum nemo. Dolores atque modi quidem debitis assumenda, harum quas molestiae quis numquam voluptatum fuga provident ducimus architecto eveniet cupiditate consectetur. Non architecto omnis voluptatibus dolor repellendus debitis fugiat atque numquam illo, dolorum, eius unde tenetur doloremque harum.
        </p>` */}
    </AppContext.Provider>
  )
}

export default Features