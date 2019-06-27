/* Inspired by https://codepen.io/aaroniker/pen/gdyjRg */

import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('pho3nix-menu-button')
export class Pho3nixMenuButton extends LitElement {
    @property({ type: Boolean, reflect: true, attribute: true })
    checked = false;

    static get styles() {
        return [
            css`
                .menu {
                    display: block;
                    width: 40px;
                    height: 36px;
                    position: relative;
                    cursor: pointer;
                }
                .menu div {
                    position: absolute;
                    height: 4px;
                    border-radius: 2px;
                    background: var(--color, #fff);
                    transition: width 0.2s ease 0.2s, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6);
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6), width 0.2s ease 0.2s;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6), width 0.2s ease 0.2s, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6);
                }
                .menu input {
                    display: none;
                }
                .menu input + div {
                    top: 50%;
                    left: 0;
                    margin: -2px 0 0 0;
                    width: 40px;
                    transform-origin: 50% 50%;
                }
                .menu input + div + div {
                    top: 2px;
                    left: 0;
                    width: 20px;
                    transform-origin: 0 50%;
                }
                .menu input + div + div + div {
                    bottom: 2px;
                    right: 0;
                    width: 28px;
                    transform-origin: 100% 50%;
                    transform: translate(-12px, 0);
                }
                .menu input:checked + div {
                    transform: rotate(-45deg);
                    transition: -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                }
                .menu input:checked + div + div {
                    width: 19px;
                    transform: translate(6px, 0) rotate(45deg);
                    transition: width 0.2s ease, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, width 0.2s ease;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, width 0.2s ease, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                }
                .menu input:checked + div + div + div {
                    width: 19px;
                    transform: translate(-6px, 0) rotate(45deg);
                    transition: width 0.2s ease, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, width 0.2s ease;
                    transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, width 0.2s ease, -webkit-transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
                }
            `
        ];
    }

    private inputChanged(evt: MouseEvent) {
        this.checked = (evt && evt.target && (<HTMLInputElement> evt.target).checked) || false;
    }

    protected render() {
        return html`
            <label class="menu">
                <input type="checkbox" .checked=${this.checked} @change=${this.inputChanged}>
                <div></div>
                <div></div>
                <div></div>
            </label>
        `;
    }
}
