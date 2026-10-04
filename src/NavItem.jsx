export default function NavItem({children,active})
{
    return<li className={` ${active ? 'active' : 'nav-item'}`}>
        {children}
    {active && <div className='active-line'></div>}
    </li>
}