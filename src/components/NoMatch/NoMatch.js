import React from 'react';
import Box from '@material-ui/core/Box';

const NoMatch = () => {
    return (
        <div>
            
            <Box textAlign="center" m={5}>
        <h1>Route not Found</h1>
          <br/>
          <h1> 
              <b>404!!!!</b>
          </h1>
      </Box>
        </div>
    );
};

export default NoMatch;