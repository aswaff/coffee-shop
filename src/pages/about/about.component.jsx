import './about.styles.css'

export const About = () => {
    return (
        <div className="homepage-wrapper">
            <div className="homepage-text">
                <div className="homepage-coffee">
                    <span className="coffeepic">☕</span>
                    <h2>Coffee</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className="homepage-donut">
                    <span className="donutpic">🍩</span>
                    <h2>Donut</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
            </div>
        </div>
    )
}