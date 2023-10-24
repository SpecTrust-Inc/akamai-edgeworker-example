# Example Akamai Edge Worker

This repository is an example of how to implement an Akama Edge Worker that
talks to Spec Proxy.

Please forward any questions you have to your Spec representative.

## Package Documentation

[Spec Proxy Library](https://www.npmjs.com/package/@specprotected/spec-proxy-akamai-worker)

This repository is a thin wrapper around `spec-proxy-akamai-worker` library
linked above. See the documentation of that library for more information on how
to use it.

## How to use

If you are already familiar with [Akamai Edge Workers](https://techdocs.akamai.com/edgeworkers/docs/welcome-to-edgeworkers)
then you can work with your Spec representative to get your environment set up
and then run an `npm run build` in this repository and upload the generated
`dist/edge_worker_bundle.tgz` file into your Edge Worker configuration.

If you haven't used Akamai Edge Workers before, you may want to configure an
[Akamai Sandbox](https://techdocs.akamai.com/sandbox/docs/create-a-sandbox-with-the-cli).
This will allow you to test your configuration locally before deploying it to
the Akamai Staging or Production environments.

In order to test your Spec Proxy configuration, you will need to have your
environment ready. Please contact your Spec representative about getting your
environment online and ready for testing.

The configuration and operation of this worker is straightforward. After
creating your Edge Worker by [adding it to your contract](https://techdocs.akamai.com/edgeworkers/docs/set-up-the-edgeworkers-service)
then following [this documentation](https://techdocs.akamai.com/edgeworkers/docs/create-an-edgeworker-id)
to get an Edge Worker ID, open the `package.json` file and change `<insert
edgeworker ID>` to the ID of the Edge Worker you created in your Akamai Control
panel. Once you have this configured, and you've started your Akamai sandbox
with `akamai sandbox start`, you can run `npm run update-sandbox-worker` which
will build the project, compile it into a worker code bundle, and then upload
that bundle to the sandbox worker. Allow anywhere from thirty seconds to a
couple of minutes for the sandbox to update the worker code and then test your
changes with `curl -H"Host: your-hostname.com" http://localhost:9550/`.

## Debugging

If you need to do any additional debugging for any reason, you can follow
[Akamai's Documentation](https://techdocs.akamai.com/edgeworkers/docs/enable-enhanced-debug-headers-for-responseprovider)
on enabling debug header. Replace the `<insert propery hostname>` with the
hostname of the property you're deploying this Edge Worker to and then running
`npm run edgeworker-auth` will provide you with the Akamai trace header
described in the documentation link.
