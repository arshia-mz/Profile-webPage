export default function NavItem({children,active,loc})
{
    return<li className={` ${active ? 'active' : 'nav-item'}`} onClick={() => loc(children)}>
        {children}
    {active && <div className='active-line'></div>}
    </li>
}