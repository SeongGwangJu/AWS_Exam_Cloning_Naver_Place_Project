import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import Saved from '../../components/MainContainer/Saved/Saved';
import MainContainer from '../../components/MainContainer/MainContainer';

function SavedPage(props) {
    return (
        <div>
            <MainContainer>
                <Saved />
            </MainContainer>
        </div>
    );
}

export default SavedPage;