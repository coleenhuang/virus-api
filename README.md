# Documentation for Virus api
The information in this API is from my personal notes on viruses, and though I have a degree in microbiology, I can't guarantee that all the information will be correct or up to date. So if you are using this API, please keep that in mind.

## Endpoints

### GET /baltimore
#### Parameter
type(required) - Needs to be a Roman numeral from I to VII

The viruses and their families in the database are sorted according to the Baltimore classification system. This endpoint returns a list of the families in the selected group.

### GET /families
#### Parameter
family(optional) - eg. Flaviviridae.

Returns a list of viruses.

### GET /host
#### Parameter
host-type
or
host-name

Returns a list of viruses by host.
