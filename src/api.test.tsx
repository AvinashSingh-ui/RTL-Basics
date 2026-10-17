import {describe,expect,it, vi} from 'vitest';
import {render,screen} from '@testing-library/react';
import Api from "./api"
import userEvent from '@testing-library/user-event';
describe("api component test suite",()=>{
    it("should be able to fetch user data",async()=>{
        vi.spyOn(globalThis,"fetch").mockResolvedValue({
            json:async()=>({name:"Avinash"})
        }as Response)
        render(<Api />);
        const button=screen.getByRole('button',{name:"Fetch User"})
        expect(button).toBeDefined();
        await userEvent.click(button);
        const heading=screen.getByRole('heading',{name:"Avinash"});
        expect(heading).toBeDefined();
    })
}

)