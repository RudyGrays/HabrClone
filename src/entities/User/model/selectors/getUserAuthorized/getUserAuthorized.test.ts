import { StateSchema } from "app/providers/StoreProvider"
import { getUserAuthorized } from "./getUserAuthorized"



describe('getUserAuthorized', ()=>{
    test('should return true', () =>{
        const state: DeepPartial<StateSchema> = {
            user: {
                authorized: true
            }
        }

        expect(getUserAuthorized(state as StateSchema)).toEqual(true)
    })

    test('should return false', ()=>{
        const state: DeepPartial<StateSchema> = {}
       
        expect(getUserAuthorized(state as StateSchema)).toEqual(false)
    })  
})