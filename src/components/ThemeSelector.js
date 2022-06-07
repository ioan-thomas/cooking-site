import {useTheme} from '../hooks/useTheme'

// styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { colorChange } = useTheme()
  return (
    <div className='theme-selector'>
        <div className="theme-buttons">
            {themeColors.map( color => (
                <div
                    key={color}
                    onClick={() => colorChange(color)}
                    style={{background : color}}/>
            ))}
        </div>
    </div>
  )
}
