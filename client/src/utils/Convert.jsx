import React from 'react'

export function ConvertDate(birthdate) {
    const dateString = birthdate.split('-').join('')

    const year = +dateString.substring(0, 4);
    let month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);
    
    month--

    switch(month) {
        case 0:
            month = 'Janvier'
            break
        case 1:
            month = 'Février'
            break
        case 2:
            month = 'Mars'
            break
        case 3:
            month = 'Avril'
            break
        case 4:
            month = 'Mai'
            break
        case 5:
            month = 'Juin'
            break
        case 6:
            month = 'Juillet'
            break
        case 7:
            month = 'Août'
            break
        case 8:
            month = 'Septembre'
            break
        case 9:
            month = 'Octobre'
            break
        case 10:
            month = 'Novembre'
            break
        case 11:
            month = 'Décembre'
            break
        default:
            month = 'Mois'
      }
    

    const date = day + ' ' + month + ' ' + year
    return date
}