import { Form, Text, Button, Logo, Img } from './InputElements'
import LogoImg from '../../assets/logo.png'

const AddVocabulary = ({ word, translation, handleKeyDown, handleText, handleTranslation, addToVocabulary }) => {
    return (
        <Form>
            <Logo>
                <Img src={LogoImg} alt="logo" />
            </Logo>
            <Text
                type="text"
                name="word"
                value={word}
                id="word"
                onChange={(e) => handleText(e)}
                onKeyDown={handleKeyDown}
                placeholder="Word"
                required />
            <Text
                type="text"
                name="translation"
                value={translation}
                id="translation"
                onChange={(e) => handleTranslation(e)}
                onKeyDown={handleKeyDown}
                placeholder="Translation"
                required />
            <Button onClick={addToVocabulary}>Add To Vocabulary</Button>
        </Form>
    )
}

export default AddVocabulary