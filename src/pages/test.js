import React from 'react';
import {Link} from 'gatsby';
import {navigate} from 'gatsby';
import Heder from '../components/Header';
import {Button} from 'react-bootstrap';

const Test = () => {
    return ( 
        <div>
      <Heder title="Text page"/>

        <h1>I'm a test Page!</h1>
      <Link to="/">home</Link>
      <Button color="secondary" onClick={()=>navigate('/')}>Navigato to HomePage</Button>
        </div>
     );
}
 
export default Test;