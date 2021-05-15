import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

const PetZone = () => {
    const history = useHistory();
    const [petData, setPetData] = useState();

    const callPetPage = async () => {
        try{
            const res = await fetch('api/displaypets', {
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log("petzone data  ",data);
            
            if (!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch(err){
            console.log(err);
            // history.push('/')
        }
    }

    return (
        <></>
    )
}

export default PetZone