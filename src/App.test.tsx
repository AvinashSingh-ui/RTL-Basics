import {describe,expect,it} from 'vitest';
import {render,screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

import App from './App.tsx';

describe("App Component test suite",()=>{
    
   it("should increase the count on the button",async()=>{
    render(<App/>);
    const initialCount=screen.getByRole('heading',{name:"0"});
    expect(initialCount).toBeDefined();
    const button=screen.getByRole("button",{name:"Increment"});
    expect(button).toBeDefined();
     await userEvent.click(button);
    const updatedCount=await screen.findByRole('heading',{name:"1"});
    expect(updatedCount).toBeDefined();

   });

});