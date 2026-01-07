# Versioning

> v\<major>.\<minor>.\<patch>\_a\<assets>\_d\<data>

- `major` - Major version. When big changes happen to this repo.
- `minor` - Minor version. Feature changes.
- `patch` - Patch version. Mostly bug fixes or some minor hiccups fix.
- `assets` - Assets version incremental for [assets/](/assets/) directory.
- `data` - Data version incremental for [data/](/data/) directory.

## Versioning method

**DO NOT** do versioning in [package.json](/package.json) or [README.md](/README.md) but instead in [vbump-config.json](/.github/vbump-config.json) and see below about bump behavior when the value is `true`:

- `major`
  - Bump major version
  - Reset `minor` and `patch` version
  - **Override `minor` and `patch` config**
- `minor`
  - Bump minor version
  - Reset `patch` version
  - **Override `patch` config**
- `patch`
  - Bump patch version
- `assets`
  - Bump assets version
  - **Override `major`, `minor` and `patch` config**
- `data`
  - Bump data version
  - **Override `major`, `minor` and `patch` config**