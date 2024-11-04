import React from 'react';
import { IconType } from 'react-icons';
import heroImage from '/assets/crackedeng.png';
import { FaDiscord, FaBookReader } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

interface ICard {
  description: string;
  Icon: IconType;
  gifId: string;
  link: string;
}

const content: ICard[] = [
  { description: "tochi's discord", Icon: FaDiscord, gifId: "da5y75QMcu0SqMpTwT", link: "https://discord.gg/9h7T6urrMy" },
  { description: "contact me", Icon: MdOutlineMail, gifId: "m5G4MgIBj0zFiu9fUn", link: "mailto:tochey@outlook.com" },
  { description: 'read of the week', Icon: FaBookReader, gifId: "pYFXNY6kfSDJQzgQXM", link: "https://x.com/hnasr/status/1852537428227375482?s=46" }
];

const Card: React.FC<ICard> = ({ description, Icon, gifId, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-col h-80 rounded-xl justify-end relative ">
    <div className="absolute inset-0 bg-top bg-cover opacity-40" style={{ backgroundImage: `url('/assets/gifs/${gifId}.gif')` }}></div>
    <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
    <div className='px-5 py-3 flex justify-between relative z-10 '>
      <p className='font-bold text-lg'>{description}</p>
      <Icon className='text-2xl font-bold transition-transform transform hover:scale-110' />
    </div>
  </a>
);

const Hero: React.FC = () => (
  <div className='relative pb-16'>
    <div className='relative'>
      <img src={heroImage} className='w-full max-h-[350px] object-cover tablet:max-h-[400px]' alt="Hero" />
      <div className="absolute top-0 h-[350px] tablet:h-[400px] w-full">
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
    <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>tochi</h1>
      <h2 className='text-md max-w-xs text-center'>yapper, engineer, entrepreneur with a passion for teaching</h2>
    </div>
  </div>
);

const App: React.FC = () => (
  <div className="rounded-lg w-full tablet:max-w-md tablet:mx-auto">
    <Hero />
    <div className='flex flex-col gap-5 my-5 px-5 items-center justify-center'>
      {content.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  </div>
);

export default App;