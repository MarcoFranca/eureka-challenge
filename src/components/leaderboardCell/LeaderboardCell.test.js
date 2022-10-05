import {render} from "@testing-library/react";
import LeaderboardCell from "./LeaderboardCell";


const componentWhapper = ()=>{
    return render(<LeaderboardCell/>)
}

describe("tag button", ()=>{
    it('should render cardsCell', function () {
        const button = componentWhapper()
        expect(button).toMatchSnapshot();
    });
})


