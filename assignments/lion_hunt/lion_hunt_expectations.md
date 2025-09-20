# Expectations for the lion hunt game

| Description | Input String | Output |
|---|---|---|
| A single lion and zebra right next to eachother. | `"LZ"` | 0 |
| A single lion and zebra right next to eachother with a single space between them. | `"Z L"` | 1 |
| A single lion and zebra right next to eachother with a 5 spaces between them. | `"L     Z"` | 5 |
| Multiple lions with no zebras. | `"L     L"` | -1 |
| Multiple zebras with no lions. | `"Z   Z   Z"` | -1 |
| Multiple lions and zebras with closest zebra om right side of lion. | `"L  ZL Z"` | 0 |
| Multiple lions, one of which is right next to a zebra. |  `"LLZ"`| 0 |
| Multiple zebras, one of which is right next to a lion. | `"LZZ"` | 0 |
| A single zebra with no lions. | `"Z"` | -1 |
| A single lion with no zebras. | `"L"` | -1 |
| A empty string. | `""` | -1 |
| A long string of lions with a single zebra at the end. | `"LLLLLLLLLZ"` | 0 |
| A single lion with a long string of zebras next to it. | `"LZZZZZZZZZ"` | 0 |
