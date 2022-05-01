import { Form, Text, Button } from './InputElements'

const EditVocabulary = ({ word, translation, handleKeyDown, handleEditText, handleEditTranslation }) => {
    return (
        <Form>
            <Text
                type="text"
                name="word"
                value={word}
                id="word"
                onChange={(e) => handleEditText(e)}
                onKeyDown={handleKeyDown}
                placeholder="Word"
                required />
            <Text
                type="text"
                name="translation"
                value={translation}
                id="translation"
                onChange={(e) => handleEditTranslation(e)}
                onKeyDown={handleKeyDown}
                placeholder="Translation"
                required />
            <Button>Edit</Button>
        </Form>
    )
}

export default EditVocabulary