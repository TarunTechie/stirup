import Card from './card'
export default function Features()
{
    return <>
    <div className='flex justify-center gap-10'>
        <h1 className='font-heading text-maron text-6xl'>Unlock The Flavors</h1>
        <div className='flex mt-2 text-5xl'>
        <h1 className='font-sill text-orange'>Yummy.</h1>
        <h1 className='font-sill text-olive'>Tasty.</h1>
        <h1 className='font-sill text-maron'>Delicious</h1>
        </div>
    </div>
    <Card
    image={"/images/random.jpeg"}
    name={"RANDOM"}
    content={"this card will be genetating random recepies in the card so ya this is a card sdysdfhdfhdrejertsejyerjyethestetyheyeye"}
    />
    </>
}