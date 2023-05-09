import './Navbar.css'

const Navbar = () =>{
    return (
        <div>
            <nav class="navbar">
                <div class="left">
                    <h1>Event Pool</h1>
                </div>
                <div class="right">
                    <input type="checkbox" id="check"/>
                    <label for="check" class="checkBtn">
                        <i class="fa fa-bars"></i>
                    </label>
                    <ul class="list">
                        <li><a href="/globalEvents">Global Events</a></li>
                        <li><a href="/globalEvents">Your Events</a></li>
                        <li><a href="/createEvent">Add an event</a></li>
                    </ul>
                </div>
            </nav>
        </div>    
    )
}

export default Navbar;