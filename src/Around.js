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

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>Ville</td>
                        <td>Indice de qualité</td>
                    </tr>
                    {
                        this.state.list.map( (unit) => {
                            return(
                                <tr>
                                    <td>{unit.name}</td>
                                    <td>{unit.quality}</td>
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