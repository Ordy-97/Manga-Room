import React, { useState, useContext } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from 'mdb-react-ui-kit';
import { UrlContext } from '../../utils/Context';
import styled from 'styled-components';

// Styled component pour le conteneur principal
const StyledTabsContainer = styled.div`
  width: 250px;
  background-color: rgba(255, 28, 247, 0.4);
  box-shadow: 0 4px 12px rgba(59, 113, 202, 0.3);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #fff;
`;

// Styled component pour le titre
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
`;

// Styled component pour les items de l'onglet
const StyledTabsItem = styled(MDBTabsItem)`
  width: 100%;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledTabsLink = styled(MDBTabsLink)`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: #3b71ca;
  text-align: center;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    color: #3b71ca;
    background-color: rgba(255, 28, 247, 0.05);
    border-radius: 8px;
  }
  &.active {
    background-color: rgba(255, 28, 247, 0.1);
    color: #3b71ca;
    box-shadow: 0 2px 8px rgba(59, 113, 202, 0.4);
    border-radius: 8px;
  }
`;

export default function Categories({ isLoading }) {
  const [justifyActive, setJustifyActive] = useState('#');
  const { switchUrl } = useContext(UrlContext);

  // Gérer l'action au clic, mettre à jour le style et appeler l'API
  const handleJustifyClick = async (value, url) => {
    await switchUrl(url); // Modification de l'Url
    setJustifyActive(value); // Mise à jour immédiate de l'élément actif
  };

  return (
    <StyledTabsContainer>
      <Title>Categories</Title>
      <MDBTabs className="flex-column">
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab1', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=maid');
            }}
            className={justifyActive === 'tab1' && !isLoading ? "active" : ""}
          >
            femme de ménage
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab2', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=waifu');
            }}
            className={justifyActive === 'tab2' && !isLoading  ? "active" : ""}
          >
            waifu
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab3', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=marin-kitagawa');
            }}
            className={justifyActive === 'tab3' && !isLoading  ? "active" : ""}
          >
            marin-kitagawa
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab4', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=oppai');
            }}
            className={justifyActive === 'tab4' && !isLoading  ? "active" : ""}
          >
            oppai
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab5', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=mori-calliope');
            }}
            className={justifyActive === 'tab5' && !isLoading  ? "active" : ""}
          >
            mori-calliope
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab6', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=selfies');
            }}
            className={justifyActive === 'tab6' && !isLoading  ? "active" : ""}
          >
            selfies
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab7', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=raiden-shogun');
            }}
            className={justifyActive === 'tab7' && !isLoading  ? "active" : ""}
          >
            raiden-shogun
          </StyledTabsLink>
        </StyledTabsItem>
        <StyledTabsItem>
          <StyledTabsLink
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              handleJustifyClick('tab8', 'https://api.waifu.im/search?limit=9&is_nsfw=false&byte_size=%3C=400000&tag=uniform');
            }}
            className={justifyActive === 'tab8' && !isLoading  ? "active" : ""}
          >
            uniforme
          </StyledTabsLink>
        </StyledTabsItem>
      </MDBTabs>
    </StyledTabsContainer>
  );
}
