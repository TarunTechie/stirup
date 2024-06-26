export default function News()
{
    return(
        <div className="grid justify-center items-center bg-peach rounded-3xl p-10 m-10 border-2 border-maron">
            <img src="/fulllogo.svg" className="max-w-sm mx-auto p-8"/>
            <div className="grid gap-10 justify-center">
            <h1 className="font-bold text-4xl underline underline-offset-8 text-maron">SIGN UP FOR NEWS LETTERS</h1>
            <input
          className="p-4 rounded-xl border-2 border-orange"
          type="email"
          placeholder="Email"
          name="email"/>
            <button className="lrbtn rounded-lg mx-auto">SIGNUP</button>
            </div>
        </div>
    )
}