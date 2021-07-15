import React from 'react';

const SuperheroList = (props) => { 
  console.log(props.superheroeslist)
return(
    <div>
        {
            props.superheroeslist.map((key) => {
                return (<React.Fragment>
                        <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Primary Ability</th>
                                    <th scope="col">Secondary Ability</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">{key.superheroId}</th>
                                    <td>{key.name}</td>
                                    <td>{key.primaryAbility}</td>
                                    <td>{key.secondarAbility}</td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            
                          
                        </React.Fragment>
                );

            })
        }
    </div>
  );
  
}
export default SuperheroList;