# ios-printer-plugin

print directly to BT printer

## Install

```bash
npm install ios-printer-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`printImage(...)`](#printimage)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printImage(...)

```typescript
printImage(img: string) => Promise<void>
```

| Param     | Type                |
| --------- | ------------------- |
| **`img`** | <code>string</code> |

--------------------

</docgen-api>
