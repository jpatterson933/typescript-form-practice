
// this interface ensures that whatever uses it has this formatter method
export interface HasFormatter {
    format(): string;
}