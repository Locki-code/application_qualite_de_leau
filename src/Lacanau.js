import React, {Component} from 'react';

const indices = [
    {
      quality:"Qualité de l'eau",
      index:"Indice",
      image:""
    },
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
    state = {
        quality: null
    }
    
    handleValue = event => {
        this.setState({
            quality: event.target.value
        });
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        value={this.state.quality}
                        type="number"
                        placeholder="Indice du jour"
                        onChange={this.handleValue}
                        min={0}
                        max={100}
                    />
                </form>
                <div class="col-sm-6">
                    <table>
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
                    <p>Indice du jour : {this.state.quality}</p>
                    {this.state.quality == null ? "La qualité n'est pas défini" : 
                    this.state.quality<50 ? <img src="https://www.flaticon.com/svg/vstatic/svg/2640/2640438.svg?token=exp=1610895709~hmac=5c7402aad01ceff2c67d6ae9d5cf77a2" alt="Pollué"/> : 
                    this.state.quality<90 ? <img src="https://www.flaticon.com/svg/vstatic/svg/3075/3075404.svg?token=exp=1610895808~hmac=b806602a4c4a1c84dd380322e78ec930" alt="Propre"/> : <img src="https://www.flaticon.com/svg/vstatic/svg/2927/2927491.svg?token=exp=1610895780~hmac=584fbf0d8110f4cb8c091ced32bd8cf9" alt="Très propre"/>}
                </div>
            </div>
        );
    }
}

export default Lacanau;