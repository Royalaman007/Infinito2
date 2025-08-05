"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, User, Mail, Calendar, Clock, Shield, Award, FileText, CheckCircle, XCircle } from "lucide-react"

export function CAReviewPage({ application, onBack }) {
  const [reviewNotes, setReviewNotes] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  if (!application) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No application selected</p>
      </div>
    )
  }

  const handleApprove = () => {
    setIsProcessing(true)
    console.log("Approving CA application:", application.id)
    // Here you would typically make an API call to approve the application
    // and add the applicant to the CA list
    setTimeout(() => {
      setIsProcessing(false)
      onBack()
    }, 1000)
  }

  const handleReject = () => {
    setIsProcessing(true)
    console.log("Rejecting CA application:", application.id)
    // Here you would typically make an API call to reject the application
    setTimeout(() => {
      setIsProcessing(false)
      onBack()
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to CA Applications
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">CA Application Review</h1>
        </div>
      </div>

      {/* Application Details Card */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {application.applicantName.charAt(0).toUpperCase()}
              </div>
              <div>
                <CardTitle className="text-2xl">{application.applicantName}</CardTitle>
                <p className="text-gray-600">Application ID: {application.id}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              🕒 Pending Review
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Applicant Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Full Name:</span>
                  <span className="font-medium">{application.applicantName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Email:</span>
                  <span className="text-blue-600 font-medium">{application.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Experience:</span>
                  <span className="font-medium">{application.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Applied Date:</span>
                  <span className="font-medium">{application.appliedDate}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Professional Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Specialization:</span>
                  <Badge variant="outline">{application.specialization}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Qualifications:</span>
                  <span className="font-medium">{application.qualifications}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Application Status:</span>
                  <Badge variant="outline">Pending Review</Badge>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Review Deadline:</span>
                  <span className="font-medium text-orange-600">3 days remaining</span>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          {/* <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{application.experience.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">A+</div>
                  <div className="text-sm text-gray-600">Background Check</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">4.8</div>
                  <div className="text-sm text-gray-600">Reference Rating</div>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Review Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Review Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Add your review notes, observations, or recommendations here..."
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                className="min-h-[120px]"
              />
              <p className="text-sm text-gray-500 mt-2">
                These notes will be saved with the application decision.
              </p>
            </CardContent>
          </Card>

          {/* Decision Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Application Decision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Approve Application</h4>
                    <p className="text-sm text-green-700">
                      Approve this application and add the applicant to the CA team.
                    </p>
                  </div>
                  <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Reject Application</h4>
                    <p className="text-sm text-red-700">
                      Reject this application. The applicant will be notified.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-end">
                  <Button variant="outline" onClick={onBack} disabled={isProcessing}>
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleReject}
                    disabled={isProcessing}
                    className="flex items-center gap-2"
                  >
                    <XCircle className="h-4 w-4" />
                    {isProcessing ? "Processing..." : "Reject Application"}
                  </Button>
                  <Button
                    onClick={handleApprove}
                    disabled={isProcessing}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {isProcessing ? "Processing..." : "Approve Application"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
} 