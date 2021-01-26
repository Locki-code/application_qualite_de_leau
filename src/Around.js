import React, {Component} from 'react';

class Around extends Component{
    
    state = {
        list: []
    }

    // componentDidMount() est appelée immédiatement après que le composant est monté (inséré dans l’arbre). C’est ici que vous devriez placer les initialisations qui requièrent l’existence de nœuds du DOM. Si vous avez besoin de charger des données depuis un point d’accès distant, c’est aussi le bon endroit pour déclencher votre requête réseau.
    componentDidMount(){
        fetch("http://localhost:3000")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    list: result
                })
            })
    }

    color(quality) {
        /*let g = quality * (255 / 100);
        let r = 255 - g;
        let b = 0;*/
        let g,r;
        if(quality < 50){
            r = 255;
            g = 0;
        }else if(quality < 90){
            r = 205;
            g = 80;
        }else {
            r = 50;
            g = 200;
        }
        return "rgb(" + r + ", " + g + ", " + 0 + ")";
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Ville</th>
                        <th>Indice de qualité</th>
                    </tr>
                    {
                        // Affichage des indices de valeur des villes voisines
                        this.state.list.map( (unit) => {
                            return(
                                <tr>
                                    <td>{unit.name}</td>
                                    <td style={ { color : this.color(unit.quality)} } >
                                        {unit.quality}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default Around;