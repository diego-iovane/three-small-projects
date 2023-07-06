import { useState } from 'react'
import ProductVisualizar from "./ProductVisualizar"
import { Container, Inner, Editor, CustomEl, ColorsContainer, ColorButton, Label } from "./Elements"

const Customization = () => {

  const [colors, setColors] = useState({
    cuff: "#14423b",
    body: "#a9a9a9",
    cuffColors: [ "#a9a9a9", "#14423b", "#4becd4", "#b741e1", "#1d0e25"],
    bodyColors: ["#a9a9a9", "#1d0e25", "#3e53f4", "#4becd4", "#ff7214"],
  })

  const handleColorChange = (e, color) => setColors({...colors, [e.target.name]: color})

  return (
    <Container>
      <Inner>
        <ProductVisualizar colors={colors} />
        <Editor>
          <CustomEl>
            <Label htmlFor="cuff">Cuff Color</Label>
            <ColorsContainer>
              {
                colors.cuffColors.map(color => <ColorButton name="cuff" key={color} color={color} onClick={(e) => handleColorChange(e, color)} />)
              }
            </ColorsContainer>
          </CustomEl>
          <CustomEl>
            <Label htmlFor="body">Body Color</Label>
            <ColorsContainer>
              {
                colors.bodyColors.map(color => <ColorButton name="body" key={color} color={color} onClick={(e) => handleColorChange(e, color)} />)
              }
            </ColorsContainer>
          </CustomEl>
        </Editor>
      </Inner>
    </Container>
  )
}

export default Customization