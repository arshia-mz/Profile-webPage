export default function Contacts({...props})
{
    return(
        <div className="contact" {...props}>
            <ul className="contact-list">
                <li>
                    <a href="">My GitHub</a>
                </li>
                <li>
                    <a href="">My Instagram</a>
                </li>
                <li>
                    <a href="arshia.mohammadzadeh2022@gmail.com">My Email</a>
                </li>
                <li>
                    <a href="">My Linkdin</a>
                </li>
            </ul>
        </div>
    );
}