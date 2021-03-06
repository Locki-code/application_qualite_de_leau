import React, {Component} from 'react';

const indices = [
    {
      quality:"Pollué",
      index:"X < 50",
      image:""
    },
    {
      quality:"Propre",
      index:"50 <= X < 90",
      image:""
    },
    {
      quality:"Très propre",
      index:"90 <= X",
      image:""
    }
];


class Lacanau extends Component{
    // Créer une variable utilisable uniquement dans la class
    state = {
        quality: null
    }
    
    // Met à jour la valeur pour la plage de Lacanau, lors d'une nouvelle saisi
    handleValue = event => {
        this.setState({
            quality: event.target.value
        });
    }

    render(){
        return(
            <div style={{marginTop: "20px"}}>
                <div>
                    
                    {
                    // Affichage du tableau des indices
                    }
                    <table>
                        <tr>
                            <th>Qualité de l'eau</th>
                            <th>Indice</th>
                        </tr>
                        {indices.map(function(indice){
                            return(
                                <tr>
                                    <td>{indice.quality}</td>
                                    <td>{indice.index}</td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>
                <div id="aff_jour">
                    <form>
                        <label for="indice">Indice du jour</label>
                        <br/>
                        <input
                            id="indice"
                            value={this.state.quality}
                            type="number"
                            placeholder="Indice"
                            onChange={this.handleValue} 
                            min={0}
                            max={100}
                        />
                    </form>
                    {/*<p>Indice du jour : {this.state.quality}</p>*/}
                    {
                    // Affichage de l'image
                    }
                    {
                    this.state.quality == null ? <img src="https://www.flaticon.com/svg/vstatic/svg/1828/1828843.svg?token=exp=1611686688~hmac=a90e73769315b5d0571a8c841c4ba288" alt="Non défini"/> : 
                    this.state.quality<50 ? <img src="https://www.flaticon.com/svg/vstatic/svg/2640/2640438.svg?token=exp=1611678476~hmac=186c030d48cbad38cabb599cfa6f422e" alt="Pollué"/> : 
                    this.state.quality<90 ? <img src="https://www.flaticon.com/svg/vstatic/svg/3075/3075404.svg?token=exp=1611678508~hmac=5332a7d1f78accbb55bd0a49caa9b529" alt="Propre"/> : <img src="https://www.flaticon.com/svg/vstatic/svg/2927/2927491.svg?token=exp=1611678532~hmac=6ff22ce9e98b367cbec962674e6320c0" alt="Très propre"/>
                    }
                </div>
            </div>
        );
    }
}

export default Lacanau;