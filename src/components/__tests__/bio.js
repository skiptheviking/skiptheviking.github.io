import React from "react"
import renderer from "react-test-renderer"

import Bio from "../bio"

// describe("Header", () => {
//     it("renders correctly", () => {
//         const tree = renderer
//             .create(<Header siteTitle="Default Starter" />)
//             .toJSON()
//         expect(tree).toMatchSnapshot()
//     })
// });

describe("Bio", ()=> {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Bio/>)
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
});