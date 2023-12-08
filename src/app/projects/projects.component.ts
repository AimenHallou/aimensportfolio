import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'MedChain',
      description: 'Leading the development of a blockchain-based system for secure patient-doctor data sharing.',
      skills: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Ethereum', 'IPFS', 'TypeScript', 'Chai'],
      githubLink: 'https://github.com/AimenHallou/MedChain/tree/mvp-setup',
      images: [
        { src: '../../assets/medchainHomePage.png', alt: 'Project 1 Image 1' },
        { src: '../../assets/medchainPatientPage.png', alt: 'Project 1 Image 2' },
        { src: '../../assets/medchainUserPage.png', alt: 'Project 1 Image 3' }
      ]
    },
    {
      title: 'Pet Connect',
      description: 'Crafting a social media application for pets, enhancing community engagement among pet owners.',
      skills: ['React Native', 'GraphQL', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express'],
      githubLink: 'https://github.com/FinalScript/pet-connect/tree/dev',
      images: [
        { src: '../../assets/petconnectHomePage.png', alt: 'Project 2 Image 1' },
        { src: '../../assets/petconnectOwnerProfile.png', alt: 'Project 2 Image 2' },
        { src: '../../assets/petconnectPetProfile.png', alt: 'Project 2 Image 3' },
      ]
    },
    {
      title: 'MinerVerse - Crypto Dapp',
      description: 'Developing a comprehensive blockchain game with NFT storage and smart contract functionality.',
      skills: ['Solidity', 'Node.js', 'React', 'Redux', 'TypeScript', 'Tailwind CSS', 'SASS'],
      githubLink: 'https://github.com/AimenHallou/NFTGame',
      images: [
        { src: '../../assets/minerverseHomePage.png', alt: 'Project 3 Image 1' },
      ]
    }
  ];
}
