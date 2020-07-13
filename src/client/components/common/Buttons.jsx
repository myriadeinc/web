import { Button } from 'shards-react'
import styled from 'styled-components'

export const PrimaryButton = styled(Button)`
    border-radius: 100rem;
    padding: 1rem;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 25px;
    margin: 2px;
    color: #fff;
    border: solid 3px transparent;
    background-image: linear-gradient(to right, #cc4b00 0%, #ffa600 100%);
    &:hover {
        background-position: right center;
    }
`

export const SecondaryButton = styled(Button)`
    border-radius: 100rem;
    margin: 2px;
    padding: 1rem;
    font-size: 1rem;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    color: #003cbe;
    background-image: linear-gradient(
        to right,
        #3e11e2 0%,
        #0300be 55%,
        #0050fc 100%
    );
    &:hover {
        background-image: linear-gradient(
            to right,
            #3e11e2 0%,
            #0300be 55%,
            #0050fc 100%
        );
        color: white;
    }
`

export const LightButton = styled(Button)`
    border-radius: 100rem;
    padding: 1rem;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 25px;
    margin: 2px;
    color: #f07c00 !important;
    background-color: white !important;
    border-width: 0 !important;
`

export const LightSecondaryButton = styled(Button)`
    border-radius: 100rem;
    padding: 1rem;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 25px;
    margin: 2px;
    color: white !important;
    background-color: #f07c00 !important;
    border-width: 0 !important;
`

export const DarkGradientButton = styled(Button)`
    border-radius: 100rem;
    font-size: 1rem !important;
    font-weight: 500 !important;
    padding: 0.8rem 1.8rem !important;
    border-radius: 25px;
    color: white;
    background-image: linear-gradient(to right, #5fb8fb 0%, #d533c6 100%);
    &:hover {
        background-position: right center;
    }
`
