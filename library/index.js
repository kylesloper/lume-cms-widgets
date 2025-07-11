import { Component } from "https://cdn.jsdelivr.net/gh/kylesloper/lume-cms@latest/static/components/component.js"
import { push } from "https://cdn.jsdelivr.net/gh/kylesloper/lume-cms@latest/static/components/utils.js"

customElements.define(
    "library-field",
    class extends Component {
        init() {
            // Get the field info
            const { schema, value, namePrefix } = this

            // Generate the name of the input and the id
            const name = `${namePrefix}.${schema.name}`
            const id = `field_${name}`

            // Add the <label>
            push(this, "label", { for: id }, schema.label)

            // Add the <input type="number">
            push(this, "input", {
                name,
                value,
                id,
                type: "number",
                min: 0,
                max: 100,
            })
        }
    }
)
